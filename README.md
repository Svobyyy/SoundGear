<div align="center">
  
# SoundGear

Explore our range of **high-quality** audio products. 🎧

🌐 Full-stack eCommerce website featuring **multiple categories**, **modern UI**,<br/> and a **user-friendly** shopping experience. 🛒

[Focus of this Project](#focus-of-this-project-) •
[Technologies](#technologies) •
[Features](#Features-) •
[Installation](#installation)

</div>

## Focus of this Project ✍

- **Next.js (App Router)**: Server Actions, Static and Client-Side Rendering
- **Best Practices**: Structure, Readability, Metadata, Reusable Components and Utilities
- **React Hooks**: Utilizing hooks like `useMemo`, `useCallback`, `useContext`, `memo`, and `Custom Hooks`

> [!IMPORTANT] 
> If you have any feedback on features, encounter any bugs, or have suggestions for improvements, I'd love to hear from you. Your insights help me grow as a developer!

## Technologies

<ul>
  <li>⚡ <strong>Next.js</strong></li>
  <li>📝 <strong>React Hook Forms</strong></li>
  <li>✅ <strong>Zod</strong></li>
  <li>🔧 <strong>TypeScript</strong></li>
  <li>💳 <strong>Stripe</strong></li>
  <li>📦 <strong>Mongoose</strong></li>
  <li>🗄️ <strong>MongoDB</strong></li>
  <li>🎨 <strong>Tailwind CSS</strong></li>
</ul>

## Features ✨

- **Server-Side and Client-Side Validation** using Zod and TypeScript 🛡️

  - Client and Server-side Validation
    - User's information 
    - Product's details
    - Payment's details
   
  - Client-side Validation
    - Cart's LocalStorage

##

- **Payment Gateway Integration with Stripe** 💰

  - Linking the validated email from the user's information
  - Custom Success Popup 🎉
  - Custom Canceled Popup ❌

  ![Stripe Integration](https://github.com/user-attachments/assets/de13649d-8744-4bb3-931d-231d1aa1dd5f)
  ![Payment Successs](https://github.com/user-attachments/assets/7f798f70-ee55-4462-8657-fca84eca0736)
  ![Payment Canceled)](https://github.com/user-attachments/assets/b4be959e-9ea8-4eb5-b3bb-9db4611e94f2)

##

- **Saving the order and client's information to the database after successful payment 💾**

##

- **Optimal Meta Data and SEO Optimization** 🌐
  
  - SEO-Friendly URL structure with a custom 404 Not Found page ✅
  - Meta tags for better search engine visibility ✅
  - Optimized page load speed ✅
  - Accessible and mobile-friendly design ✅
 
  ![Not Found Page](https://github.com/user-attachments/assets/846f229b-27a2-4ce7-bbbd-dc2bb4ef636e)

##

- **Interactive User Interface**
  - Custom Input Types:
    - Radio Button Input 📻 
    - Text Input ✏️
   
  ![Interface Example 1](https://github.com/user-attachments/assets/fb8131ff-78a5-4289-8986-2d6c7837c968)
  ![Interface Example 2](https://github.com/user-attachments/assets/2d6a6d4d-540a-42c0-b7cf-d96abb133cff)

  - Animations:
    - Fade In and Fade Out for Hamburger Menu, Cart, Opacity Overlay, etc. 🎬
    - Hover Animations for Interactive Elements 🖼️ 






  




  ![Interface Example 4](https://github.com/user-attachments/assets/b5eca559-b1aa-4156-9183-beff7a10e261)
   ![Interface Example 9](https://github.com/user-attachments/assets/15d3a662-91af-4c22-a1e1-79a9d0caf89b)

  
  ![Interface Example 5](https://github.com/user-attachments/assets/d5da843f-b2bd-4cf1-970c-f93ce6421570)
  ![Interface Example 8](https://github.com/user-attachments/assets/6dbb7810-ab43-43c2-bd07-9bcf79a12124)

  ![Interface Example 7](https://github.com/user-attachments/assets/3694fb26-8f54-41b6-b080-7be4bbe0fddb)
  ![Interface Example 6](https://github.com/user-attachments/assets/ca8e43ec-f595-4068-a51e-433757d6451e)

  ![Interface Example 3](https://github.com/user-attachments/assets/bd597657-5140-4971-9425-0ec19ca641a0)
  ![Interface Example 10](https://github.com/user-attachments/assets/00064bba-a913-473b-ab64-bea0bde888cb)


  
  ![Interface Example 11](https://github.com/user-attachments/assets/1f4d6be1-8a43-467f-b3e3-3bc92e8e8d3c)
  

## Installation

- Clone the repository

```bash
git clone https://github.com/your-repo/soundgear.git
```

- Navigate to the project folder
```bash
cd soundgear
```

- Create an .env file and add environment variables e.g ( Stripe key, MongoDB URL)

```bash
npm install
```

## License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

#

### What I am most proud of, and what would I do differently next time
#

#### What I am most proud of
- I heavily focused on improving my project's structure, which is super helpful for my future projects and work. 
  I'm sure I improved my best practices and usage of React's hooks.
- Learnt how to use the newest version of Next.js instead of older version -> Pages Router, therefore, I understand how to use Static Rendering in the newest App Router.
- Validation of data on each part of the web application, making the website robust againts unnecessary errors.
#### What would I do differently next time
- I would definitely start with a great structure, I refined my code on a way but next time I will do the best practices from the beggining so I don't have to refine the code so much, which takes time.

#

### What challenges did I encounter, and how did you overcome them?
- I didn't know optimal way to validate data neither Client Side nor Server Side. I researeched quite a bit about this topic and decided to use combination of Regex and Zod, new technologies for me. 
