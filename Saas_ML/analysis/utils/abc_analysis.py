import pandas as pd

def abc_classification(products):
    df = pd.DataFrame(products)
    df["revenue"] = df["sales"] * df["price"]
    df = df.sort_values("revenue", ascending=False)
    df["percentage"] = (df["revenue"] / df["revenue"].sum()) * 100
    df["cumulative"] = df["percentage"].cumsum()

    def classify(x):
        if x <= 80:
            return "A"
        elif x <= 95:
            return "B"
        else:
            return "C"

    df["class"] = df["cumulative"].apply(classify)
    return df.to_dict(orient="records")
