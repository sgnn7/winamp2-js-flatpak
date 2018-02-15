#!/bin/bash -e

CURRENT_DIR=$(dirname $0)
REPO_DIR=$CURRENT_DIR/repo
BUILD_DIR=$CURRENT_DIR/build

APP_ID="com.jordaneldredge.Winamp2"

echo "Building Flatpak artifacts..."
flatpak-builder --force-clean \
                --delete-build-dirs \
                --repo $REPO_DIR \
                $BUILD_DIR \
                $APP_ID.json

echo "Building Flatpak bundle..."
flatpak build-bundle $REPO_DIR \
                     $APP_ID.bundle \
                     $APP_ID \
                     stable

echo "Done!"
