import conf from "../conf/conf.js"
import {Client, Account,ID} from "appwrite"

class AuthService{
    client=new Client();

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);     

        this.account= new Account(this.client)
    }

    async createAccount(email,password,name){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password
            )
            if(userAccount){
                return await this.login(email,password)
            } else {
                return userAccount
            }
        } catch (error) {
           console.log("Auth Service Error :: createAccount :: Error : "+JSON.stringify(error));
           return false
        }
    }

    async login(email,password){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            console.log("Auth Service Error :: login :: Error : "+JSON.stringify(error));
            return false
        }
    }

    async getUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Auth Service Error :: getUser :: Error : "+JSON.stringify(error));
           return false
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
           console.log("Auth Service Error :: logout :: Error : "+JSON.stringify(error));
           return false
        }
    }

}

export {AuthService}

const authService = new AuthService();

export default authService;