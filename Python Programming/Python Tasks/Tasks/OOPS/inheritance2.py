class Netflix:
    def __init__(self,title,language):
        self.title=title
        self.language=language

    def show_details(self):
        print("Title: ",self.title)
        print("Language: ",self.language)

class Movie(Netflix):
    type="Action"
    def movie_type(self):
        print("Movie Type: ",self.type)

class WebSeriers(Netflix):
    season=2
    def series_seasons(self):
        print("Season Of the Web Series: ",self.season)

class Advertisement:
    def ad_info(self):
        print("This is a netflix Advertisement")

action=Movie("War","Hindi")
seriers=WebSeriers("Wednesday", "English")
ad=Advertisement()

action.show_details()
action.movie_type()

seriers.show_details()
seriers.series_seasons()

ad.ad_info