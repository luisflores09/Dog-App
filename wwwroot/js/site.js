// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
async function openUpdateModal(dogId) {
    try {
        const response = await fetch(`/api/dogs/${dogId}`);
        if (!response.ok) {
            throw new Error(`Error fetching dog data: ${response.statusText}`);
        }
        const dog = await response.json();

        document.getElementById('dogId').value = dog.id;
        document.getElementById('dogName').value = dog.name;
        document.getElementById('dogBreed').value = dog.breed;
        document.getElementById('dogAge').value = dog.age;

        const modal = new bootstrap.Modal(document.getElementById('updateModal'));
        modal.show();
    } catch (error) {
        console.error(error);
        alert("Failed to fetch dog data. Please try again.");
    }
}

async function updateDog(dogId, dog) {
    try {
        const response = await fetch(`/api/dogs/${dogId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dog)
        });
        if (!response.ok) {
            throw new Error(`Error updating dog: ${response.statusText}`);
        }
        location.reload();
    } catch (error) {
        console.error(error);
        alert("Failed to update dog. Please try again.");
    }
}

async function deleteDog(dogId) {
    if (confirm("Are you sure you want to delete this dog?")) {
        try {
            const response = await fetch(`/api/dogs/${dogId}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`Error deleting dog: ${response.statusText}`);
            }
            location.reload();
        } catch (error) {
            console.error(error);
            alert("Failed to delete dog. Please try again.");
        }
    }
}

async function deleteDog(dogId) {
    if (confirm("Are you sure you want to delete this dog?")) {
        await fetch(`/api/dogs/${dogId}`, { method: 'DELETE' });
        location.reload();
    }
}