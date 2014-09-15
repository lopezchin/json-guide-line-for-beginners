-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 10, 2014 at 12:43 PM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wwwphilw_1fx`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=51 ;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `user_id`, `contact_id`, `status`) VALUES
(48, 25, 33, 'friend'),
(50, 33, 25, 'friend');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `beneficiary_id` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `date_created` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=37 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `company`, `address`, `fullname`, `password`, `beneficiary_id`, `avatar`, `date_created`) VALUES
(24, 'jelardb@gmail.com', 'Solar Company', 'Negros Oriental', 'Jelard Baguio Negros', '5f4dcc3b5aa765d61d8327deb882cf99', '', 'CUBEN-12-Space-1-iPad3-SimonCPage.jpg', '2014-09-03'),
(25, 'cholo@mocho.com', 'Raf Cholo Mocho Company', '89 St. Las Vegas Livada ', 'Raffy Cholo', '5f4dcc3b5aa765d61d8327deb882cf99', 'f46d0c2b-bec1-44d1-a6b2-06440f206dc3', '789px_spottedquoll_2005_seanmcclean.jpg', '2014-09-03'),
(23, 'philweb.seniorprogrammer05@gmail.com', '1Fx Corp.  Inc.', '938 St. Pennsylvania, 10021', 'John Wayne Jose', '843f2bcee9ef8594dc11498b6c39be1d', 'd25d7696-78cf-4f7f-b922-a28516f5a91b', '800px_wobbegong.jpg', '2014-09-03'),
(33, 'ravenda900@gmail.com', 'Valve', 'Cebu City', 'Petter Amaleona', 'fd38704ea95d9046fcdb9437b8e951de', '', 'Port of Geelong_R.jpg', '2014-09-05');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
