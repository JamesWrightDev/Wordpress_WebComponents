@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    <number-counter></number-counter>
    <todo-list></todo-list>
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
@endsection
