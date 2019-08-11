/*
 Navicat MySQL Data Transfer

 Source Server         : 李新宇
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : 20190607

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 11/08/2019 22:27:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for profiles
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles`  (
  `ID` int(255) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `income` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `extend` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cash` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of profiles
-- ----------------------------
INSERT INTO `profiles` VALUES (1, '优惠卷', '购买课程', '20', '20', '500', '购买全栈课程', 'Fri, 02 Aug 2019 02:55:43 GMT');
INSERT INTO `profiles` VALUES (2, '优惠卷', '买了python课程', '10', '40', '50', '买了自己喜欢的课程。', 'Fri, 09 Aug 2019 14:45:15 GMT');
INSERT INTO `profiles` VALUES (3, '充值礼券', '买了java教程', '57', '45', '99', '用心学习Java', 'Fri, 09 Aug 2019 14:47:31 GMT');
INSERT INTO `profiles` VALUES (4, '转账', '帮别人购买了java书', '40', '20', '68', '买书真高兴啊。', 'Fri, 09 Aug 2019 14:49:06 GMT');
INSERT INTO `profiles` VALUES (5, '充值', '帮杨小惠购买书', '20', '43', '78', '买了最喜欢的书！', 'Fri, 09 Aug 2019 14:53:11 GMT');
INSERT INTO `profiles` VALUES (6, '充值', 'Redux+react+node', '12', '23', '454', '购买东西', 'Sat, 10 Aug 2019 14:30:55 GMT');

SET FOREIGN_KEY_CHECKS = 1;
