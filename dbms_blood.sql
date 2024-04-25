-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2024 at 08:04 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbms_blood`
--

-- --------------------------------------------------------

--
-- Table structure for table `blood`
--

CREATE TABLE `blood` (
  `bg_id` int(11) NOT NULL,
  `bg_name` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blood`
--

INSERT INTO `blood` (`bg_id`, `bg_name`) VALUES
(1, 'A+'),
(2, 'O+'),
(3, 'B+'),
(4, 'AB+'),
(5, 'A-'),
(6, 'B-'),
(7, 'O-'),
(8, 'AB-');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`) VALUES
(1, 'Mangaluru'),
(2, 'Udupi'),
(3, 'Karkala');

-- --------------------------------------------------------

--
-- Table structure for table `donor`
--

CREATE TABLE `donor` (
  `d_id` int(11) NOT NULL,
  `d_name` varchar(20) NOT NULL,
  `d_age` int(11) NOT NULL,
  `d_gender` char(1) NOT NULL,
  `bg_id` int(11) NOT NULL,
  `d_mobile` bigint(20) NOT NULL,
  `hosp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donor`
--

INSERT INTO `donor` (`d_id`, `d_name`, `d_age`, `d_gender`, `bg_id`, `d_mobile`, `hosp_id`) VALUES
(1, 'Bhavya', 19, 'F', 2, 8748035788, 2),
(2, 'Chaithra', 20, 'F', 2, 9945416887, 5),
(3, 'Deeksha', 19, 'F', 3, 8934271987, 1),
(4, 'Ram', 19, 'M', 2, 8934271987, 6),
(5, 'Bhoomika', 12, 'F', 2, 34, 6),
(6, 'Hii', 21, 'F', 2, 9945416887, 5),
(7, 'Bhavya', 18, 'F', 2, 8934271987, 6),
(8, 'Chaithra', 20, 'F', 2, 9945416887, 5),
(9, 'Bhavya Nayak', 21, 'M', 2, 8748035788, 5),
(10, 'Deeskha', 21, 'F', 2, 9725239702, 3),
(11, 'xyz', 12, 'M', 3, 24, 4);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `f_id` int(11) NOT NULL,
  `f_name` varchar(20) NOT NULL,
  `f_email` varchar(35) NOT NULL,
  `f_phone` bigint(20) NOT NULL,
  `f_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`f_id`, `f_name`, `f_email`, `f_phone`, `f_message`) VALUES
(2, '', '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `hosp_id` int(11) NOT NULL,
  `hosp_name` varchar(20) NOT NULL,
  `city_id` int(11) NOT NULL,
  `hosp_add` text NOT NULL,
  `hosp_contact` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`hosp_id`, `hosp_name`, `city_id`, `hosp_add`, `hosp_contact`) VALUES
(1, 'AJ Hospital ', 1, 'NH 66, Kuntikana, Mangaluru, Karnataka 575004', 918748035788),
(2, 'KMC Hospital', 1, ' Dr Br Ambedkar Circle, Balmatta, Mangalore - 575002 (Opposite Jyothi Theatre)', 917022809831),
(3, 'TMA PAI Hospital', 2, 'Dr. TMA Pai Hospital, Court Road, Udupi, Karnataka - 576101', 918824626192),
(4, 'Adarsh Hospital', 2, 'Near KSRTC Bus stand, Udupi, Karnataka 576101', 919943516778),
(5, 'NITTE Gajria Hospita', 3, '62G8+738, Tellar Rd, Sheshadri Nagar, Karkala, Karnataka 574104', 918424753571),
(6, 'Karkala Gov Hospital', 3, '6262+997, Karkala, Karnataka 574104', 917425925395);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blood`
--
ALTER TABLE `blood`
  ADD PRIMARY KEY (`bg_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `donor`
--
ALTER TABLE `donor`
  ADD PRIMARY KEY (`d_id`),
  ADD KEY `fk_bg_id` (`bg_id`),
  ADD KEY `fk_hosp_id` (`hosp_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`hosp_id`),
  ADD KEY `fk_city_id` (`city_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donor`
--
ALTER TABLE `donor`
  MODIFY `d_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `f_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `donor`
--
ALTER TABLE `donor`
  ADD CONSTRAINT `fk_bg_id` FOREIGN KEY (`bg_id`) REFERENCES `blood` (`bg_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_hosp_id` FOREIGN KEY (`hosp_id`) REFERENCES `hospital` (`hosp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hospital`
--
ALTER TABLE `hospital`
  ADD CONSTRAINT `fk_city_id` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
