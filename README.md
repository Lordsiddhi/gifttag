
# Guide

Clone the repo or download the zip

```bash
git clone https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop.git

```
### Run the application

Install the dependencies

```bash
npm install
```

Run the Application

```bash
npm run dev
```



## Connect Firebase

Create and account on [Firebase Console](https://console.firebase.google.com/) and Create New Project

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/e916ab1f-8cde-4681-a6ab-e2996241ffdc)

### ❌ Disable the Google Analytics and Click on Create Project

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/08b3d9f9-1072-4220-ba09-190efaff7d3b)

### Next Screen should be Something like this and Click on Continue

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/0797c7d8-2697-4327-9a33-a3df6d5ac3dd)


### You will be redirected to the project dashboard


![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/f8ae5e9d-f6fe-451c-a0e4-ded298873ba8)

### Next step is to connect firebase application to your project to do that follow the steps

**Steps:-**

- Click on the Setting's and Click on Project Settings

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/5fb8e644-dbbe-4549-8d68-96c397577661)

- Click on the web icon which is beside android icon 


![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/f0aa116e-48fe-458f-9219-940751a73a67)

-  Give a nickname and Click on Register app


![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/3b5415c6-96ea-4236-ac15-273d51f403ff)


- Firebase is already installed in our project so no need to install again but we do need to update the config file with your new credentials

- Copy only **firebaseConfig** Object

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/97930f79-7818-4d34-96c4-bc6c936185c1)

- Open the Project and open firebaseConfig.jsx which is under **src > firebase > firebaseConfig.jsx**

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/4543e670-0195-446d-9740-0f4ab52d50ac)

- Click on the **Authentication** which is under Build Section and Setup the Authentication

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/fbce57db-3233-490b-98f9-5320d2e8a68e)

- Click on the Sign-In method and then Click on Email/Password 

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/65f2d9c9-1035-4b50-ba6a-2bb5b8942a9c)

- Do this exact Configuration and Click on save


![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/632eac63-6398-4f48-a92c-82f41fb32e57)

- Same way click on Firestore Database

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/8b2b09b5-daa0-4e57-8b49-8174893fe29f)

Click on the Create Database button 

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/68b02959-38ea-4559-83ec-a43a72b0b786)

- Select Your region as Mumbai and Click Next

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/f638d7ab-24d9-4624-8415-9d28d0947cbc)

- Click on Create with Production Mode Checked (It Takes time)

![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/79b493f7-f442-4967-b27a-b9f15ad65757)

- Click on the Rules Section 


![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/6de24d59-fa47-4de7-bbf6-6206d65e327f)


- Change the Value of **false** to **true** and click on publish


![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/d695410c-c816-447d-a71d-934f3eb38aa0)



![image](https://github.com/Prathamesh-technosive/Siddhi-Gift-Shop/assets/79010748/7561600a-df9d-47fc-8368-a14c38d82930)
