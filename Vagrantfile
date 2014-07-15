# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "coreos-alpha"
  config.vm.box_version = ">= 349.0.0"
  config.vm.box_url = "http://storage.core-os.net/coreos/amd64-usr/alpha/coreos_production_vagrant.json"

  # Enable NFS for sharing the host machine into the coreos-vagrant VM.
  config.vm.network "private_network", ip: "172.17.8.150"
  config.vm.synced_folder ".", "/home/core/share", id: "core", :nfs => true,  :mount_options   => ['nolock,vers=3,udp']
  
  # Forward port
  config.vm.network "forwarded_port", guest: 8083, host: 8083
end