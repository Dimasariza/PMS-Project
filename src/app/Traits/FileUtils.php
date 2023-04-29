<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait FileUtils
{
    protected function storeFile(string $path, ?UploadedFile $file): string
    {
        if(!$file) {
            return "";
        }

        $uploaded = $file->store($path);


        return $uploaded;
    }

    protected function deleteFile(string $path, string $filename): bool
    {
        if(!Storage::exists("{$path}/{$filename}")) {
            return false;
        }

        return Storage::delete("{$path}/{$filename}");
    }

    protected function replaceFile(string $path, string $fileBefore, ?UploadedFile $fileAfter)
    {
        if(is_null($fileAfter)) {
            return null;
        }

        if(is_null($fileBefore) || $fileBefore === "") {
            return $this->storeFile($path, $fileAfter);
        }

        $exploded = explode("/", $fileBefore);
        $filename = $exploded[array_key_last($exploded)];

        $deleted = $this->deleteFile($path, $filename);
        if(!$deleted) {
            return "";
        }

        return $this->storeFile($path, $fileAfter);
    }
}
