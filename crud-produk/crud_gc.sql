# Host: localhost  (Version 5.5.5-10.4.21-MariaDB)
# Date: 2023-08-29 08:05:41
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "produk"
#

DROP TABLE IF EXISTS `produk`;
CREATE TABLE `produk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_produk` varchar(255) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga_beli` int(11) DEFAULT NULL,
  `harga_jual` int(11) DEFAULT NULL,
  `gambar_produk` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

#
# Data for table "produk"
#

INSERT INTO `produk` VALUES (1,'Indomie','indomie ini enak sekali sob',4000,5000,'489-contoh.jpg'),(2,'Biore','Sabun mandi yang sudah sangat dipercaya masyarakat Indonesia',11000,13500,'887-biore.png'),(3,'Pepsodent kecil','Pepsodent adalah merk pasta gigi dari unilever',7500,8500,'501-pepsodent.png'),(4,'Kecap Sedap','Kecap Sedap cocok untuk semua masakan',4500,5500,'181-sedap.png');
