# React MVVM Boilerplate

This project is a boilerplate for React applications, following the Model-ViewModel-View (MVVM) architecture pattern and utilizing MobX for reactivity.

## MVVM with MobX

This boilerplate follows the MVVM pattern:

- **Model**: Represents the data
- **ViewModel**: Acts as a bridge between the Model and View, implementing the presentation logic
- **View**: Renders the UI and passes user interactions to the ViewModel

MobX is used to make the Models (Stores) and ViewModels observable, allowing the View to reactively update the data changes.
