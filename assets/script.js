document.addEventListener("DOMContentLoaded", function () {
  const posts = [
    {
      title: "Part 1 - Basic Configuration",
      topic: "Basic Configuration",
      description:
        "Configure hostname and enable secret on all routers & switches.",
      file: "files/PART1.txt",
    },
    {
      title: "Part 2 - VLAN & Trunking in Core-SW2 & SW4",
      topic: "VLAN & Trunking",
      description:
        "Create VLAN, configure portfast, and setup DHCP Server in Core-SW2.",
      file: "files/PART2.txt",
    },
    {
      title: "Part 3 - VLAN & Trunking in Core-SW1, SW1, & SW2",
      topic: "Portfast",
      description:
        "Create VLAN, configure portfast, and setup DHCP Server in Core-SW1.",
      file: "files/PART3.txt",
    },
    {
      title: "Part 4 - VLAN & Trunking in Core-RTR3 & SW3",
      topic: "Router On Stick",
      description:
        "Create VLAN, configure Router on Stick, and set manual IP for servers.",
      file: "files/PART4.txt",
    },
    {
      title: "Part 5 - Point-to-Point Addressing",
      topic: "Switch Virtual Interface (SVI)",
      description:
        "Configure IP addresses in all routers and verify connectivity.",
      file: "files/PART5.txt",
    },
    {
      title: "Part 6 - OSPF Configuration",
      topic: "Routing OSPF",
      description:
        "Configure OSPF and verify that all clients can communicate.",
      file: "files/PART6.txt",
    },
    {
      title: "Part 7 - DNS & Web Server",
      topic: "DNS Server & Web Server",
      description: "Setup DNS and Web Server for agunacourse.com.",
      file: "files/PART7.txt",
    },
    {
      title: "Part 8 - Access List",
      topic: "Access List",
      description:
        "Implement ACL to restrict access from VLAN10 & VLAN60 to servers.",
      file: "files/PART8.txt",
    },
  ];

  const container = document.getElementById("post-container");

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.className =
      "card p-4 border border-gray-300 rounded-lg shadow-lg bg-white";

    card.innerHTML = `
            <h2 class="text-2xl font-bold">${post.title}</h2>
            <h3 class="text-lg font-medium text-blue-600">${post.topic}</h3>
            <p class="text-gray-600">${post.description}</p>
            <pre class="bg-gray-100 p-2 rounded-md text-gray-700" id="preview-${post.file}">Memuat...</pre>
            <div class="mt-3 flex gap-2">
                <a href="${post.file}" download class="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md">Download</a>
                <a href="${post.file}" target="_blank" class="btn btn-success bg-green-500 text-white px-4 py-2 rounded-md">Preview</a>
            </div>
        `;

    container.appendChild(card);

    // Fetch file content and display preview
    fetch(post.file)
      .then((response) => response.text())
      .then((text) => {
        document.getElementById(`preview-${post.file}`).textContent = text;
      })
      .catch((error) => {
        document.getElementById(`preview-${post.file}`).textContent =
          "Gagal memuat konten.";
      });
  });
});
