const data = []

function submitData(event){ 
    event.preventDefault()
    
    let projectName = document.getElementById("in-project-name").value
    let startDate = document.getElementById("in-start-date").value
    let endDate = document.getElementById("in-end-date").value
    let description = document.getElementById("in-project-description").value
    let tech1 = document.getElementById("in-nodejs").value
    let tech2 = document.getElementById("in-nextjs").value
    let tech3 = document.getElementById("in-reactjs").value
    let tech4 = document.getElementById("in-typescr").value
    let image = document.getElementById("in-project-image").files
    
    if(tech1.checked){
        jsicon = `<i class="fa-brands fa-js"></i>`;
    } else { jsicon = "" }


    image = URL.createObjectURL(image[0])

    const obj = {
        projectName,
        startDate,
        endDate,
        description,
        image,
        postedAt : new Date(),
        author : "Ivan"
    }
    
    data.push(obj)
    console.log(data)
    renderblog()
} 

function renderblog() {
    document.getElementById("project-posts").innerHTML = "";

    for(let i = 0; i < data.length; i++){
        console.log(data[i])
        document.getElementById("project-posts").innerHTML += `
            <div class="project-posts">
                <div class="post-1">
                    <div class="p-image">
                            <img src="${data[i].image}" alt="" />
                        </div>
                        <a href="./project-detail.html" >
                            <h3 class="p-title">${data[i].projectName} OpenAI</h3>
                        </a>
                        <label for="p-duration">Duration :</label>
                        <p class="p-duration">12 Months</p>
                        <p class="p-description">
                            ${data[i].description}
                        </p>
                        <p class="p-tech-icon">
                            <i class="fa-brands fa-js"></i>
                        </p>
                        <div class="p-btn">
                            <input type="button" value="Edit" />
                            <input type="button" value="Delete" />
                        </div>
                    </div>
                </div>
            </div>`
    }       
}