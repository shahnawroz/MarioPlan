export const createProject = (project) =>

    (dispatch,getState, { getFirebase, getFirestore }) =>{

        const firestore=getFirestore();
        firestore.collection('projects').add({

            ...project,
            authorFirstName:'Shah',
            authorLastName:'Nawrose',
            authorId: 1234,
            createdAt: new Date()


        }).then(() =>{

            dispatch({type:'CREATE_PROJECT', project})
        }

        ).catch((err)=>{

            dispatch({type:'CREATE_PROJECT', err})

        }
        )

       
    }

