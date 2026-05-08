
const components = {
    'resources':
        '<hr>' +
        '<h2>BrickMMO Resources</h2>' + 
        '<ul>' +
        '<li><a href="https://assets.brickmmo.com/">Assets</a></li>' +
        '<li><a href="https://branding.brickmmo.com/">Branding Guidelines</a></li>' +
        '<li><a href="https://cdn.brickmmo.com/">CDN</a></li>' +
        '<li><a href="https://ldr.brickmmo.com/">LDR Directory</a></li>' +
        '<li><a href="https://tasks.brickmmo.com/">Tasks</a></li>' +
        '</ul>' + 
        '<h2>BrickCoLab Resources</h2>' + 
        '<ul>' +
        '<li><a href="https://branding.brickcolab.com/">Branding Guidelines</a></li>' +
        '<li><a href="https://cdn.brickmmo.com/">CDN</a></li>' +
        '<li><a href="https://classroom.brickcolab.com/">Classroom Activities</a></li>' +
        '</ul>' + 
        '<h2>CodeAdam Resources</h2>' +
        '<ul>' + 
        '<li><a href="https://branding.codeadam.ca/">Branding Guidelines</a></li>' +
        '<li><a href="https://cdn.codeadam.ca/">CDN</a></li>' +
        '<li><a href="https://challenges.codeadam.ca/">Coding Challenges</a></li>' +
        '<li><a href="https://eplus.codeadam.ca/">ePlus</a></li>' +
        '<li><a href="https://pseudocode.codeadam.ca/">Pseudocode Guidelines</a></li>' +
        '<li><a href="https://questions.codeadam.ca/">Interview Questions</a></li>' +
        '<li><a href="https://readme.codeadam.ca/">_readme</a></li>' +
        '<li><a href="https://activities.codeadam.ca">Team Building Activities</a></li>' +
        '<li><a href="https://tidy.codeadam.ca/">Tidy</a></li>' +
        '</ul>'
};

/*
for (const [key, html] of Object.entries(components)) {
    console.log(`Key: ${key}`);
    console.log(`Component: ${html}`);
}
*/

const replace = document.getElementsByClassName("components");

for( let i = 0; i < replace.length; i ++ )
{
    const id = replace[i].getAttribute("id");
    replace[i].innerHTML = components[id];
}
