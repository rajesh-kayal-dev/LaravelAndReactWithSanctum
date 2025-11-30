<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function createNewPost(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:100',
            'category' => 'required|string|max:50',
            'status' => 'required',
            'content' => 'required|string',
        ]);

        $model = new Post();
        $model->title = $request->title;
        $model->author = $request->author;
        $model->category = $request->category;
        $model->status = $request->status;
        $model->content = $request->content;
        $model->save();

        return response()->json([
            'success' => true,
            'message' => 'Post created successfully.',
            'data' => $model,
        ]);
    }
    public function getAllPosts()
    {
        $posts = Post::orderBy('id', 'desc')->get();

        return response()->json([
            'success' => true,
            'posts' => $posts,
        ]);
    }

    public function deletePost(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:posts,id',
        ]);

        Post::where('id', $request->id)->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Post deleted successfully.',
        ]);
    }

    public function editPost($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json([
                'status' => 404,
                'message' => 'Post not found.',
            ]);
        }

        return response()->json([
            'status' => 200,
            'post' => $post,
        ]);
    }

    public function updatePost(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:100',
            'category' => 'required|string|max:50',
            'status' => 'required',
            'content' => 'required|string',
        ]);

        $post = Post::find($id);
        if (!$post) {
            return response()->json([
                'status' => 404,
                'message' => 'Post not found.',
            ]);
        }

        $post->title = $request->title;
        $post->author = $request->author;
        $post->category = $request->category;
        $post->status = $request->status;
        $post->content = $request->content;
        $post->update();

        return response()->json([
            'status' => 200,
            'message' => 'Post updated successfully.',
            'post' => $post,
        ]);
    }
}
