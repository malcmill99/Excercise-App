const session = {
    user: null,
    notifications: [],
    addNotifications(text, type='info'){
        this.notifications.push({text, type})
    },
    deleteNotification(i){
        this.notifications.splice(i,1);
    }
};

export default session;