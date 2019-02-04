Vagrant.configure("2") do |config|
	config.vm.provider "hyperv" do |h|
		h.enable_virtualization_extensions = true
		h.linked_clone = true
	end
  	config.vm.box = "bento/ubuntu-18.04"
	config.vm.synced_folder ".", "/vagrant", type: "smb", smb_username: "MilesTmp@NZDEVFRIDGE", smb_password: "3tbspgroundcoriander", mount_options: ["mfsymlinks,dir_mode=0775,file_mode=0664"]
	config.vm.network :forwarded_port, guest: 4000, host: 4000
	# doesnt work not sure why
    #config.vm.network "forwarded_port", guest: 5000, host: 5000

end