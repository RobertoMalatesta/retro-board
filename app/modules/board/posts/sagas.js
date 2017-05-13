import { put, call, select } from 'redux-saga/effects';
import uuid from 'node-uuid';
import { getCurrentUser } from 'selectors';
import { addPostSuccess, likeSuccess } from './state';

export function* onAddPost(action) {
    const user = yield select(getCurrentUser);
    const postId = yield call(uuid.v1);

    yield put(addPostSuccess({
        id: postId,
        postType: action.payload.postType,
        content: action.payload.content,
        user,
        likes: [],
        dislikes: []
    }));
}

export function* onLike(action) {
    const user = yield select(getCurrentUser);
    yield put(likeSuccess({
        ...action.payload,
        user
    }));
}