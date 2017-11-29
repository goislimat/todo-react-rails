class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks.to_json
  end

  def create
    @task = Task.new(article_params)
    @task.save
    render json: @task.to_json
  end

  def update
    @task = Task.find(params[:id])

    @task.status = toggle_status(@task.status)
    @task.save

    render json: @task.to_json
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    @tasks = Task.all
    render json: @tasks.to_json
  end

  private
    def article_params
      params.require(:task).permit(:name, :status)
    end

    def toggle_status(status)
      (status == "UNDONE") ? "DONE" : "UNDONE"
    end
end
