const resources = [

{
    title:"Engineering Mathematics I Notes",
    semester:"Semester 1",
    type:"Notes"
},

{
    title:"Engineering Physics Notes",
    semester:"Semester 1",
    type:"Notes"
},

{
    title:"C Programming Notes",
    semester:"Semester 1",
    type:"Notes"
},

{
    title:"Basic Electrical Engineering Notes",
    semester:"Semester 1",
    type:"Notes"
},

{
    title:"Engineering Drawing Past Questions",
    semester:"Semester 1",
    type:"Past Questions"
},

{
    title:"Physics Past Questions",
    semester:"Semester 1",
    type:"Past Questions"
},

{
    title:"Semester 1 Syllabus",
    semester:"Semester 1",
    type:"Syllabus"
},

{
    title:"Exam Routine Notice",
    semester:"Latest",
    type:"Notice"
}

];

function searchResources(){

    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const results = document.getElementById("results");

    results.innerHTML = "";

    const filtered = resources.filter(resource =>

        resource.title.toLowerCase().includes(keyword) ||

        resource.type.toLowerCase().includes(keyword)

    );

    if(filtered.length===0){

        results.innerHTML="<p>No matching resources found.</p>";

        return;

    }

    filtered.forEach(resource=>{

        results.innerHTML+=`

        <div class="result-card">

            <h3>${resource.title}</h3>

            <p>${resource.type}</p>

            <p>${resource.semester}</p>

        </div>

        `;

    });

}