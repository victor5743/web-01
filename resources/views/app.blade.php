<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
</head>
<body>
    <div id="app">
        <h1>Navbar</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-view></router-view>
        
        {{-- Content --}}
        @yield('content')
    </div>
    <script src="{{mix('js/app.js')}}"></script>
</body>
</html>