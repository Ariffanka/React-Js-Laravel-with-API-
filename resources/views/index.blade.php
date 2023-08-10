<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Index</title>
</head>
<body>
    
    <table>
        
        <tr>
            <th>Nomor</th>
            <th>Nama</th>
            <th>Deskirpsi</th>
            <th>Photo</th>
            <th>Aksi</th>
        </tr>

        @foreach ($data as $a)
        <tr>
            <td>{{ $loop->iteration }}</td>
            <td>{{ $a->nama }}</td>
            <td>{{ $a->desk }}</td>
            <td><img src="{{ $a->url }}" alt=""></td>
            <td></td>
        </tr>
        @endforeach

    </table>
        

</body>
</html>