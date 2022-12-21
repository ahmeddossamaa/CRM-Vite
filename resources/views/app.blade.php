<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Goblin</title>

        <link href="{{ asset('./logo.png') }}" rel="icon"/>
        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        @vite('public/assets/css/bootstrap.min.css')
        @vite('public/assets/css/uikit.min.css')
        @vite('public/assets/css/all.min.css')
        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
        <div id="app" class=""></div>
        @vite('public/assets/js/bootstrap.min.js')
        @vite('public/assets/js/uikit.min.js')
        @vite('resources/js/app.js')
    </body>
</html>
