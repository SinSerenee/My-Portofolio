$host = 'localhost';
$user = 'root'; // username default
$pass = ''; // password default
$dbname = 'nama_database'; // ganti dengan nama databasenya

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil!";
