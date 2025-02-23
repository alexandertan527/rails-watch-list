class MoviesController < ApplicationController
  def show
    @list = List.find(params[:list_id])
    @bookmark = Bookmark.find(params[:bookmark_id])
    @movie = Movie.find(params[:id])
  end
end
