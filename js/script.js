const notifications = document.querySelectorAll(".notif")
const notifSym = document.querySelector(".num")

notifications.forEach(notification=>{
    notification.addEventListener("click", function(){
        if (notification.classList.contains("unread")){
            notification.classList.remove("unread")
            notification.children[1].firstElementChild.lastElementChild.remove()
        }
        const notificationsList = document.querySelectorAll(".notif.unread")
        const notificationsNumber = document.querySelector(".notification-title").firstElementChild
        notificationsNumber.textContent = notificationsList.length
        
        if(notificationsList.length === 0){
            notifSym.classList.add("off")
        }
    })
})

