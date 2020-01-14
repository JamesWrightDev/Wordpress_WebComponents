@extends('layouts.app')

@section('content')
  @include('partials.page-header')
  <h2>Web Components</h2>

  <todo-list title="My Todo"></todo-list>
  <number-counter></number-counter>
  <number-counter></number-counter>
  <number-counter></number-counter>
  <number-counter></number-counter>
  <number-counter></number-counter>
  <number-counter></number-counter>
  <number-counter></number-counter>

  {!! get_the_posts_navigation() !!}
@endsection
