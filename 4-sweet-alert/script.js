
document.querySelector("#yourElement").addEventListener('click', myFunction);
function myFunction() {
    Swal.fire(
        'Congratulations, you made it',
        'This is an optional body message <br> for your window alert.',
        'success'
    )
};