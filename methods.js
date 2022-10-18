// INTERFACE
const postsContainer = document.getElementById("posts-container");
const loader = document.getElementById("loader");
const filter = document.getElementById("filter");



// GLOBAL
let limit = 5;
let page = 1;

const dif = [['hard', '🥉'], ['medium', '🥈'], ['easy', '🥇']];
const mapDifficulty = new Map ( dif)

// FUNCTIONS

// Fetch posts from API
async function fetchPosts() {
    // fetch
    // let max = page*limit;
    max = limit;
    const response = await fetch(`https://opentdb.com/api.php?amount=${max}`);
    // get data
    const data = await response.json();
    // return
    //console.table(data)
    return data.results;
}

// Display posts
async function displayPosts() {
    // get posts
    const posts = await fetchPosts();
    // loop
    posts.forEach( (post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div class="number">${mapDifficulty.get(post.difficulty)}</div>
            <div class="post-info">
                <h2 class="post-title">${post.question}</h2>
                <p class="post-body">${post.correct_answer
                }</p>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Load more posts
function loadMorePosts() {
    // show loader
    loader.classList.add("show");
    // hide loader adter 1 second
    setTimeout(() => {
        // remove class
        loader.classList.remove("show");
        // display more posts
        setTimeout(() => {
            page++;
            displayPosts();
        }, 300);
    }, 1000);
}

// Filter posts
function filterPosts(eventObject) {
    // get search term
    const term = eventObject.target.value.toUpperCase();
    // get posts
    const posts = document.querySelectorAll(".post");
    // loop
    posts.forEach(post => {
        // get title and body
        const title = post.querySelector(".post-title").innerText.toUpperCase();
        const body = post.querySelector(".post-body").innerText.toUpperCase();
        const diff = post.querySelector(".number").innerText;
        // if found
        if (diff.includes(term) || title.includes(term) || body.includes(term)) {
            // show
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}



// EVENT LISTENERS

// Scroll
window.addEventListener("scroll", () => {
    console.log(`
        scrollY:  ${Math.ceil(window.scrollY)}
        `)
    // check for scrolling to bottom
    if (window.innerHeight + Math.ceil(window.scrollY) >= document.body.clientHeight) {
        console.log(`
        innerHeight: ${window.innerHeight}
        scrollY:  ${Math.ceil(window.scrollY)}
        document.body.clientHeight: ${document.body.clientHeight}
        `)
        loadMorePosts();
    }
});

// Filter
filter.addEventListener("input", filterPosts);



// CALLS
displayPosts();
