import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const items = [
  { name: "Vishal Bhardwaj", id: "1CjMo7AFQl1o2y2MMMsN18NVMnYvBE5Ky", file: "Vishal Bhardwaj.jpeg" },
  { name: "Sunny Leone", id: "12elgDJtsL1Mmn9RMDZcM2IQvyJh6d6Hp", file: "Sunny Leone 2.png" },
  { name: "Shahid Kapoor", id: "1ienzAxvdpqQEJ8fJKOdMLsgR31jE7rdt", file: "Shahid Kapoor.jpeg" },
  { name: "Sachin Tendulkar", id: "1-qQse4L2VpSfRGnhahsIyDPlz-XjBOpK", file: "Sachin Tendulkar.png" },
  { name: "Rakesh & Hrithik Roshan", id: "1b_YyfnI8t4EQ9NvWvJPSRy1enuUgga3b", file: "Roshan se Roshan tak event- Rakesh & Rithik Roshan.png" },
  { name: "Rajkummar Rao", id: "1iR-9mY9iAYLMluCVk6Kfq4HlO3qCz7QS", file: "Rajkummar Rao.jpeg" },
  { name: "Rajesh Roshan", id: "1bB95B8HXLxeMS0IZ1XEDl9rKx3kH-1Z_", file: "Rajesh Roshan.jpeg" },
  { name: "Raima Sen", id: "1JptvykrMLX8CG1YX0J9bLCQryk07ckNj", file: "Raima Sen.png" },
  { name: "Raima Sen 2", id: "11W3I-Axg3znUgfmQLB99ffztW1fnGtKD", file: "Raima Sen 2.jpeg" },
  { name: "Prithviraj Sukumaran", id: "1y0aNEQwhIZdwBrxezSdIrrgCdcogaVmj", file: "Prithviraj Sukumaran.png" },
  { name: "Pratik Gandhi", id: "1s0BY-CjuK3RcAZ4MgiMQfGH6DPc7R5VZ", file: "Pratik Gandhi.jpeg" },
  { name: "Personal Image 2", id: "1E6JZjt8T0j0b0H1JKgtH-4YPCTc-5t6n", file: "Prakash Nathan - Executive.jpeg" },
  { name: "Personal Image 1", id: "1WiCRk5dDmo512my_bZ5wUz0Nrw6XcrsZ", file: "Prakash Nathan - Industry Interaction.jpeg" },
  { name: "Nivetha Pethuraj", id: "1QRUqjFb5SoF6q7wLNnrUnGvyWhVUiJfx", file: "Nivetha Pethuraj.jpeg" },
  { name: "Neil Nitin Mukesh", id: "1jnOqUPEmWkOgwZBSyfr1qVXRyVN5pAup", file: "Neil Nitin Mukesh.jpeg" },
  { name: "Kunicka Sadanand", id: "1_wVj-LGXoBqgQMcnf2HfQhTtsx3Hvg5c", file: "Kunicka Sadanand.jpeg" },
  { name: "Kabir Khan", id: "19eFpxziB8_AdjAUwcGh5CWL_zRUqAILa", file: "Kabir Khan.jpeg" },
  { name: "Jacqueline Fernandez & Salman Khan", id: "1imZK_ZdqIXyVbJMK1nmFgM6BTZHnKoc1", file: "Jacqueline Fernandez & Salman Khan.jpeg" },
  { name: "Industry Event Highlight", id: "1n15Plhd_RorKj2JyoyXokvnNZA_GhLk9", file: "Industry Leadership Highlight.jpeg" },
  { name: "Dalip Tahil", id: "1HOchzA-ZNyqSQ9tda-5W9tOvDO9vxzV7", file: "Dalip Tahil.jpeg" },
  { name: "Carolina Marin", id: "17J0G4f0U65B4T1mKa2q0GhXjDkaNZFv6", file: "Carolina Marin.png" },
  { name: "Ayan Mukerji", id: "1JYyOcu26w7qxzuxp1gpThP6u_nxZQ7TQ", file: "Ayan Mukerji.jpeg" },
  { name: "Armaan Malik", id: "1EenI42rmyZthcTuIYnBZDTJqhonb9kj4", file: "Armaan Malik.png" },
  { name: "Aamir Khan", id: "1C__ZYXd3Xeeog2W8vkZR1k7RKHXnIRzj", file: "Amir Khan.png" }
];

const galleryDir = path.join(__dirname, '..', 'public', 'assets', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

async function downloadFile(id, targetPath) {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(targetPath, buffer);
  console.log(`Saved ${targetPath} (${buffer.length} bytes)`);
}

async function main() {
  console.log(`Starting download of ${items.length} images from Google Drive...`);
  let successCount = 0;
  for (const item of items) {
    const targetPath = path.join(galleryDir, item.file);
    try {
      await downloadFile(item.id, targetPath);
      successCount++;
    } catch (err) {
      console.error(`Error downloading ${item.name} (${item.id}):`, err.message);
    }
  }
  console.log(`Finished downloading ${successCount}/${items.length} images!`);
}

main();
