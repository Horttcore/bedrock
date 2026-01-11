
const App = {
    /**
     * Cache elenents and init bindings
     */
    boot: function(): void {
        // Cache elements for reusing
        this.html = document.querySelector('html') as HTMLHtmlElement;
        this.body = document.querySelector('body') as HTMLBodyElement;
        this.bindings();
    },

    /**
     * Bind events
     */
    bindings: function() {
        // const timeout = (window as any).goBackToHomepageTimeout ?? 180000;
        const timeout = (window as any).goBackToHomepageTimeout ?? 180000;
        setTimeout(() => {
            const pathname = window.location.pathname;
            if (!/^\/(?:index\.php)?$/.test(pathname)) {
                window.location.href = window.location.origin + '/';
            }
        }, timeout);
    },
};

App.boot();
