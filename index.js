"use strict";
// check raspberry pi info (cpu serial number/cpu temperature/ip address) 
// by ohrot (dr.ohrot@gmail.com)
// ⓒ2017-2018 all rights reserved
// under MIT Lisence

const exec =  require('child-process-promise').exec;

module.exports = {
	"sn": (callback) => {
		exec('cat /proc/cpuinfo | grep Serial | cut -d " " -f 2', (error, stdout, stderr) => {
			if (error) callback(error);
			else callback(stdout.trim());
		});
	},
	"temp": (callback) => {
		exec('cat /sys/class/thermal/thermal_zone0/temp', (error, stdout, stderr) => {
			if (error) callback(error);
			else callback(stdout/1000);
		});
	},
	"ip": (callback) => {
		exec('curl ipinfo.io/ip', (error, stdout, stderr) => {
			if (error) callback(error);
			else callback(stdout.trim());
		});
	}
};
