#!/bin/bash

# Login user
user="unbuntu"

# List of server IPs
servers=("<ip-1>" "<ip-2>" "<ip-3>")

# Loop through the server IPs
for server in "${servers[@]}"; do
    echo "Connecting to $server..."

    # SSH into each server
    ssh -o StrictHostKeyChecking=no "$user"@"$server" "mkdir -p ~/.ssh && chmod 700 ~/.ssh"

    # Generate an SSH key pair
    echo "Generating SSH key on $server..."
    ssh -t "$user"@"$server" "ssh-keygen -t rsa -N '' -f ~/.ssh/id_rsa"

    # Copy the SSH public key to the current server
    echo "Copying SSH public key to $server..."
    ssh "$user"@"$server" "cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"

    # Copy the SSH public key to the other servers in the list
    for other_server in "${servers[@]}"; do
        # Skip the current server
        if [ "$other_server" != "$server" ]; then
            echo "Copying SSH public key to $other_server..."
            ssh "$user"@"$other_server" "cat >> ~/.ssh/authorized_keys" < ~/.ssh/id_rsa.pub
        fi
    done
done


