import { User } from './user.interface';

export const generateUserFromProfile = {
    google: (profile) => {
        const { name: { familyName, givenName }, photos, provider, id } = profile;
        const user: User = {
            firstName: givenName,
            lastName: familyName,
            displayPicture: photos[0].value,
            dateCreated: Date.now(),
            provider: {
                provider, id,
            },
        };
        return user;
    },
};
