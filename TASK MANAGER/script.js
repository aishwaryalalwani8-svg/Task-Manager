const taskform = document.querySelector('#task-form')
const taskcategory = document.querySelector('#task-category')
const taskinput = document.querySelector('#task-name')
// yha initial value abhi blank rhegi,hum usse html m initial value deke livr print kra skte hai
//taskinput.setAttribute('value', 'Initial Value') 
taskinput.value = '';

const tasklist = document.querySelector('#taskList')
const themeToggle = document.querySelector('#theme-toggle');
    themeToggle.addEventListener('click', () => {
    if ( document.body.dataset.theme === 'light'
    ) {
        document.body.classList.add(
            'dark-theme'
        );
        document.body.setAttribute(
            'data-theme',
            'dark'
        );

        themeToggle.textContent =
            '☀ Light Mode'
    } else {document.body.classList.remove('dark-theme' )

        document.body.setAttribute(
            'data-theme',
            'light'
        )

        themeToggle.textContent =
            '🌙 Dark Mode'
    }

    console.log(
        document.body.dataset.theme
    );

});
taskform.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = taskinput.value.trim()
    const category = taskcategory.value

    if (title === '') {
        return;
    }

    console.log('Property:', taskinput.value)
    console.log('Attribute:', taskinput.getAttribute('value'))

    const taskcard = document.createElement('div')
    taskcard.className = 'task-card'

    const taskId = Date.now()
    taskcard.setAttribute('data-id', taskId)
    taskcard.setAttribute('data-status', 'pending')
    taskcard.setAttribute('data-category', category)

    console.log(taskcard.getAttribute('data-id'))
    console.log(taskcard.getAttribute('data-status'))
    console.log(taskcard.getAttribute('data-category'))
    console.log(taskcard.dataset.status)
    console.log(taskcard.hasAttribute('data-status'))

    const statusTag = document.createElement('p')
    statusTag.textContent = 'Pending'

    const titleElement = document.createElement('h3')
    titleElement.textContent = title

    const categoryElement = document.createElement('p')
    categoryElement.textContent = `Category: ${category}`

    const addbtn = document.createElement('button')
    addbtn.textContent = 'Add'

    const editbtn = document.createElement('button')
    editbtn.textContent = 'Edit'

    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'Delete'

    const completebtn = document.createElement('button')
    completebtn.textContent = 'Complete'

    const buttongroup = document.createElement('div')
    buttongroup.className = 'button-group'
    buttongroup.append(addbtn, editbtn, deletebtn, completebtn)

    taskcard.prepend(statusTag)
    taskcard.append(titleElement, categoryElement, buttongroup)

    addbtn.addEventListener('click', () => {
        const beforeText = document.createElement('p')
        beforeText.textContent = 'Task added before'

        const afterText = document.createElement('p')
        afterText.textContent = 'Task added after'

        taskcard.before(beforeText)
        taskcard.after(afterText)
    })

    editbtn.addEventListener('click', () => {
        const newTitle = prompt('Edit task:', titleElement.textContent)
        if (newTitle && newTitle.trim() !== '') {
            titleElement.textContent = newTitle
        }
    })

    completebtn.addEventListener('click', () => {
        statusTag.textContent = 'Completed'
        const completedText = document.createElement('span')
        completedText.textContent = '✅ Completed'
        completebtn.replaceWith(completedText)
        taskcard.setAttribute('data-status', 'completed')
    })

    deletebtn.addEventListener('click', () => {
        taskcard.remove()
    })

    tasklist.appendChild(taskcard)
    taskform.reset()
})