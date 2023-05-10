<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait FileUtils
{
    protected function storeFile(string $path, ?UploadedFile $request): string
    {
        if (! $request) {
            return '';
        }

        $uploaded = $request->store($path, ['disk' => 'public']);

        return Storage::url($uploaded);
    }

    protected function deleteFile(string $path, string $filename): bool
    {
        if (! Storage::exists("public/{$path}/{$filename}")) {
            return false;
        }

        return Storage::delete("public/{$path}/{$filename}");
    }

    protected function replaceFile(string $path, string $fileBefore, ?UploadedFile $fileAfter): ?string
    {
        if (is_null($fileAfter)) {
            return null;
        }

        if (is_null($fileBefore) || $fileBefore === '') {
            return $this->storeFile($path, $fileAfter);
        }

        $exploded = explode('/', $fileBefore);
        $filename = $exploded[array_key_last($exploded)];

        $deleted = $this->deleteFile($path, $filename);
        if (! $deleted) {
            return '';
        }

        return $this->storeFile($path, $fileAfter);
    }
}
