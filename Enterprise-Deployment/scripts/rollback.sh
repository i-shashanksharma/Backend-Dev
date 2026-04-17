#!/bin/bash
echo "Rolling back..."
git revert HEAD
git push origin main