


# הרצת Docker עבור Unicard
docker_run_unicard:
	docker run -it --name my-unicard-container -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 unicard-app


# הרצת Expo על iOS
runios:
	npm run ios

# הרצת שרת Node עבור Stripe מתוך התיקייה server
runstripe:
	dotenv -e server/.env -- node server/server_stripe.js

# הרצת Ngrok לחשיפת הפורט של Expo
ngrok:
	ngrok http 3000

# בדיקת אבטחה על החבילות המותקנות
audit:
	npm audit

# ניסיון לתקן בעיות אבטחה באופן אוטומטי
audit-fix:
	npm audit fix

# ניקוי תיקיית node_modules
clean:
	rm -rf node_modules

# הסרת והתקנה מחדש של החבילות
reinstall:
	make clean
	npm install

# הצגת מבנה הקבצים בעזרת tree

# התעלמות מתיקיית node_modules
tree-ignore:
	tree -I 'node_modules'

# התעלמות מתיקיות node_modules, .git ו-dist
tree-ignore-all:
	tree -I 'node_modules|.git|dist'

# הצגת קבצים עם סיומת .js בלבד
tree-js:
	tree -P '*.js'

# הצגת מבנה תיקיות בלבד (ללא קבצים)
tree-dirs:
	tree -d

# הצגת קבצים ותיקיות מוסתרים (המתחילים בנקודה)
tree-hidden:
	tree -a

# הצגת גודל הקבצים בפורמט קריא לאדם
tree-size:
	tree -h

# שמירת מבנה הקבצים לקובץ tree.txt
tree-save:
	tree > tree.txt

# מציאת קבצים ללא נתיב node_modules
findnopath:
	find . -not -path "./node_modules/*"

# הגדרת מטרות שאינן קבצים (phony targets)
.PHONY: runios runstripe docker_run_unicard ngrok audit audit-fix clean reinstall \
        tree-ignore tree-ignore-all tree-js tree-dirs tree-hidden tree-size tree-save \
        findnopath






