# raspiinfo
return raspberry pi info (serial number/cpu temp/ip address)

## API

### sn(callback)
cpu serial number via /proc/cpuinfo 

### temp(callback)
cpu temperature via /sys/class/thermal/thermal_zone0/temp

### ip(callback)
external ip address via ipinfo.io/ip
