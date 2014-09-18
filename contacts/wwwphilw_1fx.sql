-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 12, 2014 at 09:25 AM
-- Server version: 5.5.31
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wwwphilw_1fx`
--
CREATE DATABASE IF NOT EXISTS `wwwphilw_1fx` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `wwwphilw_1fx`;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(225) NOT NULL,
  `address` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `phone_number` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `fullname`, `address`, `email`, `phone_number`) VALUES
(1, 'John Wayne Jose', 'New Jersey, US', 'philweb.seniorprogrammer05@gmail.com', '222 222-2222'),
(3, 'Lawrence DeMar', 'Kilaton Jersey Street USA', 'lawrencedelmar@gmail.com', '222 333-4444'),
(6, 'Christopher Palma', 'FX Churchill Barclays', 'christopher_palma@gmail.com', '222 313-2312'),
(13, 'name sample ', 'sample adds', 'sample_email@yahoo.com', '123 12325'),
(19, 'insert name', 'insert address', 'insert_emailadd@gmail.com', '123807'),
(29, 'Testing case', 'the address of testing case', 'emailof.testingcase@gmail.com', '123 90082'),
(30, 'sample insert', 'address sample insert', 'sample_insert@gmail.com', '281 1232');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(225) NOT NULL,
  `lastname` varchar(225) NOT NULL,
  `card_number` int(11) NOT NULL,
  `verification_value` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `email` int(11) NOT NULL,
  `my_payment_method_identifier` int(11) NOT NULL,
  `some_other_things` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(1, 'johnwaynejose', 'philweb223'),
(6, 'christpalma', 'philweb223'),
(8, 'ruiz', 'mansano'),
(9, 'hello', 'world'),
(13, 'jason', 'bagatsing'),
(23, 'hell', 'hello');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
