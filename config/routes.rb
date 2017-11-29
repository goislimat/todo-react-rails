Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    get '/tasks', to: 'tasks#index'
    post '/tasks', to: 'tasks#create'
    patch '/tasks/:id', to: 'tasks#update'
    delete '/tasks/:id', to: 'tasks#destroy'
  end
end
