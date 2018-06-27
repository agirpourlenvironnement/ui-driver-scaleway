# ui-driver-scaleway
Rancher UI driver for Scaleway docker-machine drivers

## Development

This package contains a small web-server that will serve up the scaleway driver UI at `http://localhost:3000/component.js`.  You can run this while developing and point the Rancher settings there.
* `npm start`
* The driver name can be optionally overridden: `npm start -- --name=scaleway`
* The compiled files are viewable at http://localhost:3000.
* **Note:** The development server does not currently automatically restart when files are changed.

## Building

For other users to see your driver, you need to build it and host the output on a server accessible from their browsers.

* `npm run build`
* Copy the contents of the `dist` directory onto a webserver.
  * If your Rancher is configured to use HA or SSL, the server must also be available via HTTPS.

## Using

* Add a Machine Driver in Rancher 2.0 (Global -> Node Drivers)
  * Name: Your `scaleway`.
  * Download URL: `https://github.com/scaleway/docker-machine-driver-scaleway/releases/download/v1.3/docker-machine-driver-scaleway_1.3_linux_amd64.tar.gz`
  * Custom UI URL: `https://agirpourlenvironnement.github.io/ui-driver-scaleway/dist/component.js`)
* Wait for the driver to become "Active"
* Go to Clusters -> Add Cluster, your driver and custom UI should show up.
