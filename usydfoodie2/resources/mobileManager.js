//v2.0

/*
page structure:
page.div: the div to show.

//This isn't a mobile manager. It's a single page app manager.
*/

function _navman(){
    //Add an event library.
    this.events = {};
    this.fire = function (e, args) {
        if (this.events[e]) {
            this.events[e].forEach((f, i) => {
                try {
                    f(args)
                } catch (e) {
                    console.log(e);
                }
            });
        }
    };

    this.on = function (e, f) {
        _e = e.split(',');
        _e.forEach((i) => {
            if (!this.events[i]) this.events[e] = [];
            this.events[i].push(f);
        })
    };
    //Create the navigation stack to handle 'back' calls.
    this.navStack=[];
    this.pages={};
    document.addEventListener("DOMContentLoaded", function(){
        window.history.pushState({}, '');
    })

    this.addpage=function(name,page){
        let _page=page;
        if (typeof page=='function')_page=new page();
        this.pages[name]=_page;
    }

    this.wrap=function(div,settings){
        //Wraps the div in contextually relevant fluff to ensure that it can be navigated away from, etc.
        //return _div;
    }

    this.transitionTo=function(pageName,options){
        //ready arguments for firing the transition event.
        let args = {
            prev: navstack.stack[navstack.stack.length - 1],
            dest: next,
            cancel: () => {
                args._cancel = true;
            },
            _cancel: false
        };
        if (!next) {
            args.dest = navstack.stack[navstack.stack.length - 1];
        } else {
            args.dest = next;
        }
        navstack.fire('transition', args);
        
        if (!args._cancel) {
            //hide all other pages
            for (let pg in this.pages){
                this.pages[pg].div.style.display="none";
            }
            if (!next) {
                window.history.pushState({}, ''); // Pop the state.
                navstack.stack.pop();
                this.pages[navstack.stack[navstack.stack.length - 1]].div.style.display="block";
            } else {
                navstack.stack.push(next);
                this.pages[navstack.stack[navstack.stack.length - 1]].div.style.display="block";
            }
        }
        //show the required page
        //push it onto the stack
    }

    this.back=function(){
        // pop the stack and move backwards
        this.transitionTo();
    }

    window.addEventListener('popstate', function () {
        transitionTo();
    })
}


var navman= new _navman();


/*changelog:
1.2 Now with cancelable navigation.
2.0 Now much more structured owo
*/