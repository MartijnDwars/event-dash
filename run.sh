# Boot the CoreOS VM. This will share the current dir with /home/coreos/share and forward 8083 (host) to 80 (container)
echo "Starting Vagrant..."
vagrant up

# Build the image from the Dockerfile
echo "Building the dolphin-dash image..."
vagrant ssh -c "docker build -t magnetme/dolphin-dash /home/core/share"

# Delete old container
echo "Removing the old dolphin-dash container (if any)..."
vagrant ssh -c "if docker ps -a | grep -q dolphin-dash; then docker rm dolphin-dash; fi"

# Run the 'magnetme/dolphin-dash' container and name the resulting image 'dolphin-dash'
echo "Running the dolphin-dash container!"
vagrant ssh -c "docker run -p 8083:80 --name dolphin-dash magnetme/dolphin-dash"