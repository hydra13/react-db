import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class PostStore extends EventEmitter {
    constructor() {
        super();
        this.posts = [];
        this.getPosts = this.getPosts.bind(this);
        this.change = this.change.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    change() {
        console.log('before emitting change')
        this.emit('change');
        console.log('after emitting change')
    }

    getPosts(posts) {
        console.log('getPosts')
        this.posts = posts;
        this.change();
    }

    handleActions(action) {
        console.dir(action)
        switch (action.type) {
            case 'GET_POSTS': {
                console.log('get_posts')
                this.getPosts(action.data);
                break;
            }
        }
    }
}

const store = new PostStore();
dispatcher.register(store.handleActions);
export default store;