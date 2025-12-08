const url = "http://localhost:8080/task/user/1";

function hideLoader() {
    document.getElementById("loading").style.display = "none";
}

function show(tasks) {
    let tableRows = '';

    let tableContent = `
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Username</th>
                <th scope="col">User Id</th>
            </tr>
        </thead>
        <tbody>
    `;

    for (let task of tasks) {
        tableRows += `
            <tr>
                <td scope="row">${task.id}</td>
                <td>${task.description}</td>
                <td>${task.user.username}</td>
                <td>${task.user.id}</td>
            </tr>
        `;
    }

    tableContent += tableRows;
    tableContent += `</tbody>`;

    document.querySelector("table.table-hover").innerHTML = tableContent;
    }

    async function getAPI(url) {
        const response = await fetch(url, {method: "GET"});

        var data = await response.json();
        console.log(data);

        if (response) {
            hideLoader();
        }
        show(data);
    }

    getAPI(url);