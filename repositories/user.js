import axios from 'axios'

const getUserDetail = async () => {
    try {
        let respone = await axios.get('https://randomuser.me/api')
        if (respone.status != 200) {
            throw 'Failed request'
        }
        if (respone.data.results.length > 0) {
            let responeUser = respone.data.results[0]
            let user = {}
            user.dateOfBirth = new Date(responeUser.dob.date)
            user.email = responeUser.email
            user.gender = responeUser.gender ?? 'male'
            user.userId = responeUser.id.name + responeUser.id.value
            user.address = `${responeUser.location.state}`
            user.username = responeUser.login.username
            user.url = responeUser.picture.large
            user.phone = responeUser.phone ?? ''
            user.registeredDate = new Date(responeUser.registered.date)
            return user
        }
        throw 'User not found'
    } catch (error) {
        throw error
    }
}

export default {
    getUserDetail,
}