const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
    },
    error: {
        icon: 'fa-circle-xmark',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
    },
    alert: {
        icon: 'fa-circle-info',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id, message) => {
    const { icon } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${message}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let id = btn.id;
        let text = `This is a ${id} message.`;
        createToast(id, text);
    });
});
